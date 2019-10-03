define({ 
  //Type your controller code here 
  /** onClick defined for HamburgerCalcoption **/
  onNavigate: function(context, isBackNavigation) {
    this.view.DisplayTable.shadowDepth = 5;

    this.view.HamburgerCalcoption.HamburguerFunctionMenu.flximgcontainer.onClick = this.OpenfunctionMenu;

    this.view.HamburgerCalcoption.addGestureRecognizer(2,{fingers:1, swipedistance: 50, swipevelocity: 80},(widget, gestureinfo)=>{
      if(gestureinfo.swipeDirection == 1){
        this.OpenfunctionMenu();
      }
    });
    



    this.view.Number1.rippleBackground  =  {
      rippleColor: "e2e2e2",
      contentLayers: [{
        background: "f5f5f5",
        backgroundType: constants.RIPPLE_CONTENT_LAYER_COLOR,
        mask: false
      }, {
        background: "f5f5f5",
        backgroundType: constants.RIPPLE_CONTENT_LAYER_COLOR,
        mask: true
      }]
    };
    this.view.Number2.rippleBackground  = {
      rippleColor: "e2e2e2",
      contentLayers: [{
        background: "f5f5f5",
        backgroundType: constants.RIPPLE_CONTENT_LAYER_COLOR,
        mask: false
      }, {
        background: "f5f5f5",
        backgroundType: constants.RIPPLE_CONTENT_LAYER_COLOR,
        mask: true
      }]
	};
    this.view.Number3.rippleBackground  = {
		 rippleColor: "e2e2e2",
      contentLayers: [{
        background: "f5f5f5",
        backgroundType: constants.RIPPLE_CONTENT_LAYER_COLOR,
        mask: false
      }, {
        background: "f5f5f5",
        backgroundType: constants.RIPPLE_CONTENT_LAYER_COLOR,
        mask: true
      }]
	};
    this.view.Number4.rippleBackground  =  {
      rippleColor: "e2e2e2",
      contentLayers: [{
        background: "f5f5f5",
        backgroundType: constants.RIPPLE_CONTENT_LAYER_COLOR,
        mask: false
      }, {
        background: "f5f5f5",
        backgroundType: constants.RIPPLE_CONTENT_LAYER_COLOR,
        mask: true
      }]
    };
    this.view.Number5.rippleBackground  =  {
      rippleColor: "e2e2e2",
      contentLayers: [{
        background: "f5f5f5",
        backgroundType: constants.RIPPLE_CONTENT_LAYER_COLOR,
        mask: false
      }, {
        background: "f5f5f5",
        backgroundType: constants.RIPPLE_CONTENT_LAYER_COLOR,
        mask: true
      }]
    };
    this.view.Number6.rippleBackground  =  {
      rippleColor: "e2e2e2",
      contentLayers: [{
        background: "f5f5f5",
        backgroundType: constants.RIPPLE_CONTENT_LAYER_COLOR,
        mask: false
      }, {
        background: "f5f5f5",
        backgroundType: constants.RIPPLE_CONTENT_LAYER_COLOR,
        mask: true
      }]
    };
    this.view.Number7.rippleBackground  =  {
      rippleColor: "e2e2e2",
      contentLayers: [{
        background: "f5f5f5",
        backgroundType: constants.RIPPLE_CONTENT_LAYER_COLOR,
        mask: false
      }, {
        background: "f5f5f5",
        backgroundType: constants.RIPPLE_CONTENT_LAYER_COLOR,
        mask: true
      }]
    };
    this.view.Number8.rippleBackground  =  {
      rippleColor: "e2e2e2",
      contentLayers: [{
        background: "f5f5f5",
        backgroundType: constants.RIPPLE_CONTENT_LAYER_COLOR,
        mask: false
      }, {
        background: "f5f5f5",
        backgroundType: constants.RIPPLE_CONTENT_LAYER_COLOR,
        mask: true
      }]
    };
    this.view.Number9.rippleBackground  =  {
      rippleColor: "e2e2e2",
      contentLayers: [{
        background: "f5f5f5",
        backgroundType: constants.RIPPLE_CONTENT_LAYER_COLOR,
        mask: false
      }, {
        background: "f5f5f5",
        backgroundType: constants.RIPPLE_CONTENT_LAYER_COLOR,
        mask: true
      }]
    };
    this.view.Number0.rippleBackground  =  {
      rippleColor: "e2e2e2",
      contentLayers: [{
        background: "f5f5f5",
        backgroundType: constants.RIPPLE_CONTENT_LAYER_COLOR,
        mask: false
      }, {
        background: "f5f5f5",
        backgroundType: constants.RIPPLE_CONTENT_LAYER_COLOR,
        mask: true
      }]
    };
    this.view.dot.rippleBackground  =  {
      rippleColor: "e2e2e2",
      contentLayers: [{
        background: "f5f5f5",
        backgroundType: constants.RIPPLE_CONTENT_LAYER_COLOR,
        mask: false
      }, {
        background: "f5f5f5",
        backgroundType: constants.RIPPLE_CONTENT_LAYER_COLOR,
        mask: true
      }]
    };
    this.view.eqeual.rippleBackground  =  {
      rippleColor: "e2e2e2",
      contentLayers: [{
        background: "f5f5f5",
        backgroundType: constants.RIPPLE_CONTENT_LAYER_COLOR,
        mask: false
      }, {
        background: "f5f5f5",
        backgroundType: constants.RIPPLE_CONTENT_LAYER_COLOR,
        mask: true
      }]
    };
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
          "duration": 0.20
        }, {
          "animationEnd": ()=>{}
        });
      self.view.flxNumbersaction.animate(
        kony.ui.createAnimation({
          "25": {
            "opacity": "0.80",
            "stepConfig": {
              "timingFunction": kony.anim.EASE
            }
          },
          "50": {
            "opacity": "0.60",
            "stepConfig": {
              "timingFunction": kony.anim.EASE
            }
          },
          "100": {
            "opacity": "0.4",
            "stepConfig": {
              "timingFunction": kony.anim.EASE
            }
          }
        }), {
          "delay": 0,
          "iterationCount": 1,
          "fillMode": kony.anim.FILL_MODE_FORWARDS,
          "duration": 0.20
        }, {
          "animationEnd": ()=>{self.view.HamburguerFunctionMenu.MoveButton.src = "expandbutton2.png";
                              this.view.HamburgerCalcoption.shadowDepth = 5;
                              }
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
        "duration": 0.20
    }, {
        "animationEnd": ()=>{this.view.HamburgerCalcoption.shadowDepth = 0;}
    });
    self.view.HamburguerFunctionMenu.MoveButton.src = "expandbuttono1.png";
    self.view.flxNumbersaction.animate(
    kony.ui.createAnimation({
        "100": {
            "opacity": "1",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.20
    }, {
        "animationEnd": ()=>{}
    });
  }
});