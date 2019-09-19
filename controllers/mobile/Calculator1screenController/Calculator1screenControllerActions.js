define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for HamburgerCalcoption **/
    AS_FlexContainer_c292b9d5229548beb1b2ee7ec3c01f61: function AS_FlexContainer_c292b9d5229548beb1b2ee7ec3c01f61(eventobject) {
        var self = this;

        function MOVE_ACTION____gd7951c7ac334dc3a94f034871fa31a1_Callback() {}
        function MOVE_ACTION____f1688e37a36a41d29988a103d4ed02a4_Callback() {}
        function ____db9ec34e7ef945fa83ca90fc55c314f8_Callback() {}
        function ____j6c08b4aee6249568e98116da109b8cb_Callback() {}
        if (self.view.HamburgerCalcoption.left == x) {
            self.view.HamburguerFunctionMenu.Image0e5a3421ad0f342.src = "expandbuttono1.png";
            self.view.HamburgerCalcoption.animate(
            kony.ui.createAnimation({
                "100": {
                    "left": "90.5%",
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    }
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.5
            }, {
                "animationEnd": ____j6c08b4aee6249568e98116da109b8cb_Callback
            });
            self.view.flxshadowpart.animate(
            kony.ui.createAnimation({
                "100": {
                    "left": "-22.33%",
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    }
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.5
            }, {
                "animationEnd": ____db9ec34e7ef945fa83ca90fc55c314f8_Callback
            });
        } else {
            self.view.HamburguerFunctionMenu.Image0e5a3421ad0f342.src = "expandbutton2.png";
            self.view.HamburgerCalcoption.animate(
            kony.ui.createAnimation({
                "100": {
                    "left": "23.33%",
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    }
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.5
            }, {
                "animationEnd": MOVE_ACTION____f1688e37a36a41d29988a103d4ed02a4_Callback
            });
            self.view.flxshadowpart.animate(
            kony.ui.createAnimation({
                "100": {
                    "left": "0%",
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    }
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.5
            }, {
                "animationEnd": MOVE_ACTION____gd7951c7ac334dc3a94f034871fa31a1_Callback
            });
        }
    },
    /** onClick defined for flxshadowpart **/
    AS_FlexContainer_aba3228c042d436ca865a154ea070532: function AS_FlexContainer_aba3228c042d436ca865a154ea070532(eventobject) {
        var self = this;

        function ____cbbcec9f4dd646558864f85f92b37868_Callback() {}
        function ____ab4c55c7161147b2a43a3363e1e2f518_Callback() {}
        self.view.HamburgerCalcoption.animate(
        kony.ui.createAnimation({
            "100": {
                "left": "90.5%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.5
        }, {
            "animationEnd": ____ab4c55c7161147b2a43a3363e1e2f518_Callback
        });
        self.view.HamburguerFunctionMenu.Image0e5a3421ad0f342.src = "expandbuttono1.png";
        self.view.flxshadowpart.animate(
        kony.ui.createAnimation({
            "100": {
                "left": "-22.33%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.5
        }, {
            "animationEnd": ____cbbcec9f4dd646558864f85f92b37868_Callback
        });
    },
    /** onClick defined for HamburgerCalcoption **/
    AS_FlexContainer_h24f32dc85bb4f459670dd6c7f83f6f5: function AS_FlexContainer_h24f32dc85bb4f459670dd6c7f83f6f5(eventobject) {
        var self = this;
    }
});