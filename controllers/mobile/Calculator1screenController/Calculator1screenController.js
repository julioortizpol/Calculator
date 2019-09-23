define({ 
  //Type your controller code here 
  /** onClick defined for HamburgerCalcoption **/
  onNavigate: function(context, isBackNavigation) {
    this.view.HamburgerCalcoption.HamburguerFunctionMenu.flximgcontainer.onClick = this.OpenfunctionMenu;
  },
  OpenfunctionMenu: function(){
    var self = this;
    if (self.view.HamburguerFunctionMenu.MoveButton.src == "expandbuttono1.png") {
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
          "duration": 0.25
        }, {
          "animationEnd": ()=>{}
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
          "duration": 0.25
        }, {
          "animationEnd": ()=>{self.view.HamburguerFunctionMenu.MoveButton.src = "expandbutton2.png"}
        });
    }else{
      this.closeMenu();
    }
  },
  closeMenu: function(){
    var self = this;
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
        "duration": 0.25
    }, {
        "animationEnd": ()=>{}
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
        "duration": 0.25
    }, {
        "animationEnd": ()=>{}
    });
  }
});