define({ 
  //Type your controller code here 
  /** onClick defined for HamburgerCalcoption **/
  onNavigate: function(context, isBackNavigation) {
    this.setRiple();
    this.setshadowdepth();
    this.setgestures();
    this.setNumbersAction();
	
    //this.view.flxmain.onTouchEnd = (source)=>{alert(source);};
  },
  DisplayngOperation: function(textparam){
    //DotLogic
    //Parentesis Logic
    //Coma logic
    //passtextLogic
	const displaytext = this.view.displayoperationtext;
    switch(isNaN(textparam)){
      case true:
        if(displaytext.text === null){
          if((textparam.match(/[.(-]/g) !== null)){
           displaytext.text = textparam; 
          }
        }else{
          const dotlogic = (!(displaytext.text.includes(".")) || !(textparam.includes(".")));
          const comalogic = !(textparam.includes(","));
          const endparenthesis = !(((displaytext.text[displaytext.text.length - 1]).includes("(") && textparam.includes(")")));
          const startparenthesis = !((displaytext.text[displaytext.text.length - 1]).includes(".") && textparam.includes("("));
          
          if(dotlogic && comalogic && endparenthesis && startparenthesis){
            displaytext.text = (displaytext.text).concat(textparam);
          }
        }
        break;
      default:
        if(displaytext.text === null){
          displaytext.text = textparam;
        }else {
          displaytext.text = (displaytext.text).concat(textparam);
        }
        break;
    }
    this.Resizedisplaytext();
  },
  Resizedisplaytext: function(){
    if(this.view.displayoperationtext.skin === "resultskin"){
      this.view.flxoperation.onScrolling = ()=>{
        this.view.displayoperationtext.skin = "resizeoutputtext1";
      };
    }else if(this.view.displayoperationtext.skin === "resizeoutputtext1"){
       this.view.flxoperation.onScrolling = ()=>{
        this.view.displayoperationtext.skin = "resizeoutputtext2";
      };
    }else{
      this.view.flxoperation.onScrolling = ()=>{};
    }
    this.view.flxoperation.scrollToEnd();
  },
  setNumbersAction: function(){
    this.view.Number1.onTouchEnd = ()=>{this.DisplayngOperation(this.view.lbNumber1.text);};
    this.view.Number2.onTouchEnd = ()=>{this.DisplayngOperation(this.view.LBNumber2.text);};
    this.view.Number3.onTouchEnd = ()=>{this.DisplayngOperation(this.view.Lbnumber3.text);};
    this.view.Number4.onTouchEnd = ()=>{this.DisplayngOperation(this.view.lbNumber4.text);};
    this.view.Number5.onTouchEnd = ()=>{this.DisplayngOperation(this.view.lbNumber5.text);};
    this.view.Number6.onTouchEnd = ()=>{this.DisplayngOperation(this.view.lbNumber6.text);};
    this.view.Number7.onTouchEnd = ()=>{this.DisplayngOperation(this.view.lbNumber7.text);};
    this.view.Number8.onTouchEnd = ()=>{this.DisplayngOperation(this.view.lbNumber8.text);};
    this.view.Number9.onTouchEnd = ()=>{this.DisplayngOperation(this.view.lbNumber9.text);};
    this.view.Number0.onTouchEnd = ()=>{this.DisplayngOperation(this.view.lbNumber0.text);};
    this.view.dot.onTouchEnd = ()=>{this.DisplayngOperation(this.view.lbdot.text);};
    this.view.coma.onTouchEnd = ()=>{this.DisplayngOperation(this.view.lblcoma.text);};
    this.view.parent1.onTouchEnd = ()=>{this.DisplayngOperation(this.view.lbparent1.text);};
    this.view.parent2.onTouchEnd = ()=>{this.DisplayngOperation(this.view.lbparent2.text);};
   // this.view.Number1.onTouchEnd = ()=>{this.DisplayngOperation(this.view.lbNumber1.text);};
  },
  setgestures: function(){
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
            ((x/kony.os.deviceInfo().screenWidth)*100) <= 92)){
          thecontainer.left = `${(x/kony.os.deviceInfo().screenWidth)*100}%`;
          self.view.resulttext.text = `${(x/kony.os.deviceInfo().screenWidth)*100}%`;
          self.view.flxNumbersaction.opacity = (x/kony.os.deviceInfo().screenWidth - 0.003);
          self.view.flxdefaultactions.opacity = (x/kony.os.deviceInfo().screenWidth -0.003);
        }
      };
    };
  },
  setRiple: function(){
    //Action Button Riple
    var ripledafultproperties = {
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
    var riplePopertiesHeader = {
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
    //ActionRIPLEproperties
    this.view.plus.rippleBackground  =  ripledafultproperties;
    this.view.rest.rippleBackground  =  ripledafultproperties;
    this.view.multiply.rippleBackground  =  ripledafultproperties;
    this.view.divide.rippleBackground  =  ripledafultproperties;
    this.view.Backspaceiconflx.rippleBackground  =  ripledafultproperties;
    //header button riple
    this.view.flxcalcanglemode.rippleBackground  =  riplePopertiesHeader;
    this.view.menubutton.rippleBackground  =  riplePopertiesHeader;
    //keyboard button riple
    this.view.Number1.rippleBackground  =  ripledafultproperties;
    this.view.Number2.rippleBackground  = ripledafultproperties;
    this.view.Number3.rippleBackground  = ripledafultproperties;
    this.view.Number4.rippleBackground  =  ripledafultproperties;
    this.view.Number5.rippleBackground  =  ripledafultproperties;
    this.view.Number6.rippleBackground  =  ripledafultproperties;
    this.view.Number7.rippleBackground  =  ripledafultproperties;
    this.view.Number8.rippleBackground  =  ripledafultproperties;
    this.view.Number9.rippleBackground  =  ripledafultproperties;
    this.view.Number0.rippleBackground  =  ripledafultproperties;
    this.view.dot.rippleBackground  =  ripledafultproperties;
    this.view.coma.rippleBackground  =  ripledafultproperties;
    this.view.eqeual.rippleBackground  =  ripledafultproperties;
    this.view.parent1.rippleBackground  =  ripledafultproperties;
    this.view.parent2.rippleBackground  =  ripledafultproperties;
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
      self.view.flxdefaultactions.animate(
        kony.ui.createAnimation({
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
          "animationEnd": ()=>{
          }
        });
      self.view.flxNumbersaction.animate(
        kony.ui.createAnimation({
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
          "left": "92%",
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
        "animationEnd": ()=>{this.view.HamburgerCalcoption.shadowDepth = 0;
                             this.view.flxdefaultactions.opacity = 1;}
      });
    self.view.HamburguerFunctionMenu.MoveButton.src = "expandbuttono1.png";
    self.view.flxdefaultactions.animate(
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
  },
  setshadowdepth: function(){
    this.view.DisplayTable.shadowDepth = 5;
    this.view.flxheader.shadowDepth = 5;
  },

});