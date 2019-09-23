define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flximgcontainer **/
    AS_FlexContainer_d529c2fc174f43b2842da6845b456066: function AS_FlexContainer_d529c2fc174f43b2842da6845b456066(eventobject) {
        var self = this;
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
        self.view.HamburguerFunctionMenu.MoveButton.src = "expandbuttono1.png";
        self.view.flxshadowpart.animate(
        kony.ui.createAnimation({
            "100": {
                "left": "-23.33%",
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
    }
});