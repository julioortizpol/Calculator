define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for HamburgerCalcoption **/
    AS_FlexContainer_c292b9d5229548beb1b2ee7ec3c01f61: function AS_FlexContainer_c292b9d5229548beb1b2ee7ec3c01f61(eventobject) {
        var self = this;

        function MOVE_ACTION____f1688e37a36a41d29988a103d4ed02a4_Callback() {}
        self.view.HamburgerCalcoption.animate(
        kony.ui.createAnimation({
            "100": {
                "left": "70%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": "2",
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.25,
            "direction": kony.anim.DIRECTION_ALTERNATE
        }, {
            "animationEnd": MOVE_ACTION____f1688e37a36a41d29988a103d4ed02a4_Callback
        });
    }
});