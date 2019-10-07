define({ 
  //Type your controller code here 
  /** onClick defined for HamburgerCalcoption **/
  onNavigate: function(context, isBackNavigation) {
    this.setRiple();
    this.view.DisplayTable.shadowDepth = 5;
    this.view.flxheader.shadowDepth = 5;
    this.view.HamburgerCalcoption.HamburguerFunctionMenu.flximgcontainer.onTouchEnd = this.OpenfunctionMenu;

    this.view.HamburgerCalcoption.addGestureRecognizer(2,{fingers:1, swipedistance: 50, swipevelocity: 80},(widget, gestureinfo)=>{
      if(gestureinfo.swipeDirection == 1){
        this.OpenfunctionMenu();
      }
    });
    self = this;
    var thecontainer = this.view.HamburgerCalcoption;
    this.view.HamburgerCalcoption.HamburguerFunctionMenu.flximgcontainer.onTouchStart = ()=>{
      self.view.flxmain.onTouchMove = (widget, x, y)=>{
        if((((x/kony.os.deviceInfo().screenWidth)*100) >= 23.33 && 
            ((x/kony.os.deviceInfo().screenWidth)*100) <= 90.5)){
          thecontainer.left = `${(x/kony.os.deviceInfo().screenWidth)*100}%`;
          self.view.resulttext.text = `${(x/kony.os.deviceInfo().screenWidth)*100}%`;
        }
      };
    };
  },
  setRiple: function(){
    //Action Button Riple
    this.view.plus.rippleBackground  =  {
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
    this.view.rest.rippleBackground  =  {
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
    this.view.multiply.rippleBackground  =  {
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
    this.view.divide.rippleBackground  =  {
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
    this.view.Backspaceiconflx.rippleBackground  =  {
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
    //header button riple
    this.view.flxcalcanglemode.rippleBackground  =  {
      rippleColor: "e2e2e2",
      contentLayers: [{
        background: "ffffff",
        backgroundType: constants.RIPPLE_CONTENT_LAYER_COLOR,
        mask: false
      }, {
        background: "ffffff",
        backgroundType: constants.RIPPLE_CONTENT_LAYER_COLOR,
        mask: true
      }]
    };
    //keyboard button riple
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
    this.view.coma.rippleBackground  =  {
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
    this.view.flxmain.onTouchMove = (widget, x, y)=>{};
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
                              this.view.HamburgerCalcoption.shadowDepth = 4;
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