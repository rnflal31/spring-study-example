/**=========================================================
 * Module: sidebar-menu.js
 * Provides a simple way to implement bootstrap collapse plugin using a target
 * next to the current element (sibling)
 * Targeted elements must have [data-toggle="collapse-next"]
 =========================================================*/
App.controller('SidebarController', ['$rootScope', '$scope', '$state', '$location', '$http', '$timeout', '$log', '$q', 'advertiserUserService','$window',
    function ($rootScope, $scope, $state, $location, $http, $timeout, $log, $q, advertiserUserService, $window) {

        var currentState = $rootScope.$state.current.name;
        var $win = $(window);
        var $html = $('html');
        var $body = $('body');
        // Adjustment on route changes
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            currentState = toState.name;
            // Hide sidebar automatically on mobile
            $('body.aside-toggled').removeClass('aside-toggled');

            $rootScope.$broadcast('closeSidebarMenu');
        });

        // Normalize state on resize to avoid multiple checks
        $win.on('resize', function () {
            $body.removeClass('aside-toggled');
        });

        // Check item and children active state
        var isActive = function (item) {

            if (!item) return;

            if (!item.sref || item.sref == '#') {
                var foundActive = false;
                angular.forEach(item.submenu, function (value, key) {
                    if (isActive(value)) foundActive = true;
                });
                return foundActive;
            }
            else
                return $state.is(item.sref) || $state.includes(item.sref);
        };

        // Load menu from json file
        // -----------------------------------

        $scope.getMenuItemPropClasses = function (item) {
            //return (item.heading ? 'nav-heading' : '') +
            //    (isActive(item) ? ' active' : '');
            return (isActive(item) ? ' active' : '');
        };

        function loadSidebarMenu() {

            //var menuURL = 'menu/sidebar?v=' + (new Date().getTime()); // jumps cache
            $rootScope.menuItems = [];
            $log.debug("currentTopMenu : ", $rootScope.currentTopMenu);
            if(angular.equals($rootScope.currentTopMenu, "home") || $rootScope.currentTopMenu == undefined) {
                $rootScope.menuItems = null;
            } else {
                if(!angular.equals($rootScope.currentTopMenu, "mypage")) {
                    var menuJson = 'menu/sidebar-menu.json',
                        menuURL = menuJson + '?v='+ (new Date().getTime()); // jumps cache
                    $http.get(menuURL)
                        .success(function (items) {
                            advertiserUserService.getData().then(function(data) {
                                items[0].submenu[0].alert = data.campaignStatusInspectingCount + data.campaignStatusRequestHoldCount;
                                items[0].submenu[0].submenu[0].alert = data.campaignStatusInspectingCount;
                                items[0].submenu[0].submenu[3].alert = data.campaignStatusRequestHoldCount;
                                items[0].submenu[2].alert = data.soCampaignStatusConsentCount + data.soCampaignStatusDissentCount;
                                items[0].submenu[2].submenu[1].alert = data.soCampaignStatusConsentCount;
                                items[0].submenu[2].submenu[2].alert = data.soCampaignStatusDissentCount;
                                items[1].alert = data.advertiserTotalCount;
                                items[1].submenu[0].alert = data.advertiserStatusRequestExpirationCount;
                                items[0].alert = items[0].submenu[0].alert + items[0].submenu[2].alert;
                                $rootScope.menuItems = items;
                            });
                            $log.debug("menuItems : ", $rootScope.menuItems);
                        })
                        .error(function (data, status, headers, config) {
                            alert('Failure loading menu');
                        });
                } else {
                    var menuJson = 'menu/sidebar-mypage-menu.json',
                        menuURL = menuJson + '?v='+ (new Date().getTime()); // jumps cache
                    $http.get(menuURL)
                        .success(function (items) {
                            $rootScope.menuItems = items;
                        });
                }
            }
        }

        $scope.$on('loadSidebarMenu', loadSidebarMenu);
        loadSidebarMenu();

        // Handle sidebar collapse items
        // -----------------------------------
        var collapseList = [];

        $scope.addCollapse = function ($index, item) {
            collapseList[$index] = !isActive(item);
        };

        $scope.isCollapse = function ($index) {
            return (collapseList[$index]);
        };

        // Opener에서 호출 되어야하는 공통함수
        $window.sidebarCallBack = function(){
            loadSidebarMenu();
        }

        $scope.toggleCollapse = function ($index, isParentItem) {


            // collapsed sidebar doesn't toggle drodopwn
            if (isSidebarCollapsed()) return true;

            // make sure the item index exists
            if (angular.isDefined(collapseList[$index])) {
                collapseList[$index] = !collapseList[$index];
                closeAllBut($index);
            }
            else if (isParentItem) {
                closeAllBut(-1);
            }

            return true;

            function closeAllBut(index) {
                index += '';
                for (var i in collapseList) {
                    if (index < 0 || index.indexOf(i) < 0)
                        collapseList[i] = true;
                }
                // angular.forEach(collapseList, function(v, i) {
                // });
            }
        };

        // Helper checks
        // -----------------------------------
        function isSidebarCollapsed() {
            return $body.hasClass('aside-collapsed');
        }

        function isSidebarToggled() {
            return $body.hasClass('aside-toggled');
        }
    }]);
