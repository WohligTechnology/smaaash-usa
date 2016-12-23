// var adminurl = "http://104.155.129.33:82/"; //India server
var adminurl = "http://146.148.109.185:94/"; //US server
var imgurl = adminurl + "upload/";
var imgpath = imgurl + "readFile";
var pdfpath ="http://104.155.129.33:82/upload/readFile?file";


var uploadurl = imgurl;

var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function($http) {
    var navigation = [{
        name: "Home",
        classis: "active",
        anchor: "home",
        subnav: [{
            name: "Subnav1",
            classis: "active",
            anchor: "home"
        }]
    }];
    var loginDetail = $.jStorage.get("loginDetail");
    if (!loginDetail) {
      loginDetail ={};
    }

    return {
        getnav: function() {
            return navigation;
        },

        makeactive: function(menuname) {

            for (var i = 0; i < navigation.length; i++) {
                if (navigation[i].name == menuname) {
                    navigation[i].classis = "active";
                } else {
                    navigation[i].classis = "";
                }
            }
            return menuname;
        },

        getAllCityByOrder: function(callback) {
            $http({
                url: adminurl + 'city/getAllCityByOrder',
                method: 'POST',
                withCredentials: true
            }).success(callback);
        },
        setUser: function(data) {
            $.jStorage.set("loginDetail", data);
        },
        // getuser :function(){
        //   return loginDetail ;
        // },


        getSlider: function(callback) {
            var data = {
                city: $.jStorage.get("cityid")
            };
            $http({
                url: adminurl + 'slider/getAllSliderByOrder',
                method: 'POST',
                withCredentials: true,
                data: data
            }).success(callback);
        },
        getHomeContent: function(callback) {
            var data = {
                city: $.jStorage.get("cityid")
            };
            $http({
                url: adminurl + 'exploresmash/getHomeContent',
                method: 'POST',
                withCredentials: true,
                data: data
            }).success(callback);
        },
        getExploresmash: function(request, callback) {

            $http({
                url: adminurl + 'exploresmash/findLimited',
                method: 'POST',
                withCredentials: true,
                data: request
            }).success(callback);
        },
        getOneExploresmash: function(id, callback) {
            var data = {
                _id: id,
                city: $.jStorage.get("cityid")
            };
            $http({
                url: adminurl + 'exploresmash/getOne',
                method: 'POST',
                withCredentials: true,
                data: data
            }).success(callback);
        },
        getDetailBlog: function(id, callback) {
            var data = {
                _id: id,
                city: $.jStorage.get("cityid")
            };
            $http({
                url: adminurl + 'blog/getDetailBlog',
                method: 'POST',
                withCredentials: true,
                data: data
            }).success(callback);
        },
        getPopularBlog: function(callback) {
            // var data = {
            //     _id: id,
            //     city: $.jStorage.get("cityid")
            // };
            $http({
                url: adminurl + 'blog/getPopularBlog',
                method: 'POST',
                withCredentials: true,
                // data: data
            }).success(callback);
        },
        getFoodGallery: function(id, callback) {
            var data = {
                _id: id,
                city: $.jStorage.get("cityid")
            };
            $http({
                url: adminurl + 'exploresmash/getOneExploreSmaaash',
                method: 'POST',
                withCredentials: true,
                data: data
            }).success(callback);
        },
        GetCustomerBookingDetails: function(custId, callback) {
            var data = {
                CustID: custId
            };
            $http({
                url: adminurl + 'signup/GetCustomerBookingDetails',
                method: 'POST',

                data: data

            }).success(callback);
        },
        GetCustomerBalance: function(detailsForBal, callback) {
            $http({
                url: adminurl + 'signup/GetCustomerBalance',
                method: 'POST',

                data: detailsForBal

            }).success(callback);
        },
        getPartyInside: function(id, callback) {
            var data = {
                _id: id,
                city: $.jStorage.get("cityid")
            };
            $http({
                url: adminurl + 'exploresmash/getOne',
                method: 'POST',
                withCredentials: true,
                data: data
            }).success(callback);
        },
        getAllExploreSmashByCity: function(id, callback) {
            $http({
                url: adminurl + 'exploresmash/getAllExploreSmashByCity',
                method: 'POST',
                withCredentials: true,
                data: {
                    _id: id
                }

            }).success(callback);
        },
        rechargeCard: function(rechargeOnline, callback) {

            $http({
                url: adminurl + 'signup/RechargeCard',
                method: 'POST',

                data: rechargeOnline

            }).success(callback);
        },

        getTypes: function(callback) {
            $http({
                url: adminurl + 'Type/getAll',
                method: 'POST',
                withCredentials: true
            }).success(callback);
        },





        signup: function(signupData, callback) {

            $http({
                url: adminurl + 'signup/save',
                method: 'POST',

                data: signupData

            }).success(callback);
        },
        CustomerRegistration: function(signupData, callback) {

            $http({
                url: adminurl + 'signup/CustomerRegistration',
                method: 'POST',

                data: signupData

            }).success(callback);
        },
        generateOtp: function(dataforOtp, callback) {

            $http({
                url: adminurl + 'signup/generateOtp',
                method: 'POST',

                data: dataforOtp

            }).success(callback);
        },

        VerifyCustomerLogin: function(userData, callback) {

            $http({
                url: adminurl + 'signup/VerifyCustomerLogin',
                method: 'POST',


                data: userData

            }).success(callback);
        },
        custom: function(signupData, callback) {

            $http({
                url: adminurl + 'custom/save',
                method: 'POST',

                data: signupData

            }).success(callback);
        },
        getOne: function(callback) {
            if($.jStorage.get("loginDetail")!= null){
  var data = {
                _id: $.jStorage.get("loginDetail")._id,

            };
            }

            $http({
                url: adminurl + 'signup/getOne',
                method: 'POST',

                data: data

            }).success(callback);
        },

        eventInnerForm: function(userData, callback) {
            $http({
                url: adminurl + 'enquiry/save',
                method: 'POST',

                data: userData

            }).success(callback);
        },
        subscribe: function(subscribeData, callback) {

            $http({
                url: adminurl + 'subscribe/save',
                method: 'POST',

                data: subscribeData

            }).success(callback);
        },

        getSingleExploreSmaaash: function(id, callback) {
            var data = {
                _id: id,
                city: $.jStorage.get("cityid")
            };
            $http({
                url: adminurl + 'exploresmash/getSingleExploreSmaaash',
                method: 'POST',
                withCredentials: true,
                data: data

            }).success(callback);
        },
        getcustomizeCityFun: function(id,custCityId, callback) {
            var data = {
                _id: id,
                city:custCityId
            };
            $http({
                url: adminurl + 'exploresmash/getSingleExploreSmaaash',
                method: 'POST',
                withCredentials: true,
                data: data

            }).success(callback);
        },
      searchExploreSmaaash: function(filter, callback) {
        if(filter){
          filter.city=$.jStorage.get("cityid");
        }
                $http({
                url: adminurl + 'exploresmash/getSingleExploreSmaaash',
                method: 'POST',
                withCredentials: true,
                data: filter

            }).success(callback);
        },

        getStars: function(request, callback) {

            $http({
                url: adminurl + 'star/findLImited',
                method: 'POST',
                withCredentials: true,
                data: request

            }).success(callback);

        },
        assistanceLoginSignup: function(formdata, callback) {

            $http({
                url: adminurl + 'assistance/save',
                method: 'POST',

                data: formdata

            }).success(callback);
        },

        getAllHostPartySlider: function(callback) {
            var data = {
                city: $.jStorage.get("cityid")
            };
            $http({
                url: adminurl + 'slider/getAllHostPartySlider',
                method: 'POST',
                withCredentials: true,
                data: data
            }).success(callback);
        },
        getDetailExploreSmaaash: function(id, callback) {
            var data = {
                _id: id,
                city: $.jStorage.get("cityid")
            };

            $http({
                url: adminurl + 'exploresmash/getDetailExploreSmaaash',
                method: 'POST',
                withCredentials: true,
                data: data

            }).success(callback);
        },
        addToWishList: function(id, callback) {
            console.log("nAV", id);
            var data = {
                user: $.jStorage.get("loginDetail")._id,
                wishList: {
                    exploresmash: id,
                    city: $.jStorage.get("cityid")
                }
            };
            $http({
                url: adminurl + 'signup/addToWishList',
                method: 'POST',
                withCredentials: true,
                data: data
            }).success(callback);
        },
        showWishList: function(callback) {
            // console.log("nAV", id);
            var data = {
                user: $.jStorage.get("loginDetail")._id,
            };
            $http({
                url: adminurl + 'signup/showWishList',
                method: 'POST',
                withCredentials: true,
                data: data
            }).success(callback);
        },
        removeFromWishList: function(id,callback) {
          console.log("inNav",id);
            var data = {
                user: $.jStorage.get("loginDetail")._id,
                _id:id
            };
            $http({
                url: adminurl + 'signup/deleteWishList',
                method: 'POST',
                withCredentials: true,
                data: data
            }).success(callback);
        },
        getMediaGallery: function(mediaObj,callback) {
            $http({
                url: adminurl + 'mediagallery/findLimited',
                method: 'POST',
                data:mediaObj,
                withCredentials: true

            }).success(callback);
        },

        // userWishList: function(callback) {
        //     var data = {user:$.jStorage.get("loginDetail").data._id,city:$.jStorage.get("cityid")};
        //     $http({
        //         url: adminurl + 'wishlist/getWishlistByUser',
        //         method: 'POST',
        //         withCredentials: true,
        //         data:data
        //     }).success(callback);
        // },

        logout: function(callback) {
          // console.log("im in logout");
            // $.jStorage.flush();
              $.jStorage.set("loginDetail",null);
              $.jStorage.set("loginId",null);
              $.jStorage.set("loggedInUser",null);
              $.jStorage.set("customizeobj",null);
            return $http({
                url: adminurl + 'register/logout',
                method: 'POST',
            }).success(callback);

        },
  getClients: function (callback) {
            $http.get(adminurl + "getClients").success(callback);
        },
        getLeader: function(callback) {
            $http({
                url: adminurl + 'leader/getAllLeader',
                method: 'POST',
                withCredentials: true
            }).success(callback);
        },
        getBlog: function(blogObj,callback) {
            $http({
                url: adminurl + 'blog/findLimited',
                method: 'POST',
                data:blogObj,
                withCredentials: true
            }).success(callback);
        },
        hostGetCall: function(formDatapopup, callback) {

            $http({
                url: adminurl + 'callenquiry/save',
                method: 'POST',

                data: formDatapopup

            }).success(callback);
        },
        // buyOnline: function(id,callback) {
        //   console.log("nAV",id);
        //     var data = {exploresmash:id,user:$.jStorage.get("loginDetail").data._id,city:$.jStorage.get("cityid")};
        //
        //     $http({
        //         url: adminurl + 'wishlist/save',
        //         method: 'POST',
        //         withCredentials: true,
        //         data:data
        //     }).success(callback);
        // },


        editUserData: function(signupData, callback) {

            $http({
                url: adminurl + 'signup/save',
                method: 'POST',

                data: signupData

            }).success(callback);
        },
        forgotPassword: function(credentials, callback) {

            $http({
                url: adminurl + 'signup/forgotPassword',
                method: 'POST',

                data: credentials

            }).success(callback);
        },
        CustomerResetPassword: function(credentials, callback) {

            $http({
                url: adminurl + 'signup/CustomerResetPassword',
                method: 'POST',

                data: credentials

            }).success(callback);
        },
        forgotPasswordSubmit: function(credentials, callback) {

            $http({
                url: adminurl + 'signup/forgotPasswordSubmit',
                method: 'POST',

                data: credentials

            }).success(callback);
        },
        CustomerForgetPassword: function(credentials, callback) {

            $http({
                url: adminurl + 'signup/CustomerForgetPassword',
                method: 'POST',

                data: credentials

            }).success(callback);
        },
        signupProfile: function(callback) {
          var data = {
              _id: $.jStorage.get("loginDetail")._id,
            };
            $http({
                url: adminurl + 'signup/profile',
                method: 'POST',

                data: data

            }).success(callback);
        },
        updateProfile: function(userprofile,callback) {
          // var data = {
          //     _id: $.jStorage.get("loginDetail").data._id,
          //   };
            $http({
                url: adminurl + 'signup/updateProfile',
                method: 'POST',

                data: userprofile

            }).success(callback);
        },

        getSponsors: function(callback) {

            $http({
                url: adminurl + 'sponsor/getAllSponsorPageDetail',
                method: 'POST',
                withCredentials: true

            }).success(callback);
        },
        getBenefit: function(callback) {

            $http({
                url: adminurl + 'benefit/getAll',
                method: 'POST',
                withCredentials: true

            }).success(callback);
        },


    };
});
