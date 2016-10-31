/**
 * Created by Pablo on 29/07/2016.
 */

"use strict"
angular.module('actionLauncherApp')
  .directive('actions', ['$document', function($document) {
    return {
      scope:{

      },
      templateUrl:'views/templates/actionsTemplate.html',
     link: function(scope, element, attr) {


       element.addClass("action-list");
        console.log(window);
        var isVisible =false;
                var lstScroll = 0;
        var parentTarget = element[0];



         function onAnimationComplete(evt) {
          evt.srcElement.removeEventListener('transitionend', onAnimationComplete);
          evt.srcElement.style.transition = '';
          evt.srcElement.style.transform = '';
        };


        element.on('click', clicked);
        $document.on('scroll',windowScrolling);
        $document.on('touchstart',touchDocument);
        $document.on('mousedown', touchDocument);

        // Si toco en algun sito del docuento y el action launcher esta visible lo oculto


        //si toco el action lacunher abro o cierrto los actions element
        function clicked (evt){
          if (!evt.target.classList.contains('action-launcher') ){

          }else{
                if(isVisible){
                  hideActionLauncher();

                }else{
                  showActionLauncher();
                }
          }
        }

        //Ejecuta la animacion de los actions elements
        // type = 0 -> hide 1-> show

        function performAnimation(elm){

         // requestAnimationFrame(_ => {

                elm.style.transition = 'transform 350ms cubic-bezier(0,0,0.31,1)';
                elm.style.transform = '';


         // });
        }

        //si hago scrool en la web hago desaparrecer el action
        function windowScrolling (evt){
            var st = $document.scrollTop();
            if(st > lstScroll){
              console.log("hide");
              hideButtonActionLauncher();
            }else{
              console.log("show");
              showButtonActionLauncher();
            }

            lstScroll = $document.scrollTop();

        }


        function showActionLauncher (){
          console.log("abro las acciones");
          plus2x();
          for(var e = (parentTarget.children.length-2)   ; e >=0; e --){


                parentTarget.children[e].classList.remove('action-element_hide');
                parentTarget.children[e].classList.add('action-element_show');
                parentTarget.children[e].style.transform = 'translateY(60px)';
                parentTarget.children[e].addEventListener('transitionend', onAnimationComplete);
                performAnimation( parentTarget.children[e]);

              }
            isVisible = true;
            console.log(isVisible);
        }

        function hideActionLauncher (){
          x2plus();
          console.log("cierro las acciones");
            for(var i = (parentTarget.children.length-2)   ; i >=0; i --){
              parentTarget.children[i].classList.add('action-element_hide');
              parentTarget.children[i].classList.remove('action-element_show');
            }
            isVisible = false;
        }

        function touchDocument (evt){
            if ( !evt.target.classList.contains('action-launcher')
                && !evt.target.classList.contains('action-element') && isVisible){
                  hideActionLauncher();

            }
        }

        function hideButtonActionLauncher(){

          if(isVisible){
            hideActionLauncher();
          }

          element[0].children[element[0].children.length-1].classList.add('action-element_hide');




        }

        function showButtonActionLauncher(){

          element[0].children[element[0].children.length-1].style.transform = 'translateY(100px)';
          element[0].children[element[0].children.length-1].addEventListener('transitionend', onAnimationComplete);
          performAnimation(element[0].children[element[0].children.length-1]);
          element[0].children[element[0].children.length-1].classList.add('action-element_show');
          element[0].children[element[0].children.length-1].classList.remove('action-element_hide');

        }

        function plus2x (){

          parentTarget.children[parentTarget.children.length-1].children[0].classList.remove('glyphicon-plus');
          parentTarget.children[parentTarget.children.length-1].children[0].classList.add('glyphicon-remove');

          parentTarget.children[parentTarget.children.length-1].style.transform = 'rotate(112deg)';
          parentTarget.children[parentTarget.children.length-1].addEventListener('transitionend', onAnimationComplete);
          performAnimation( parentTarget.children[parentTarget.children.length-1]);
        }

        function x2plus (){

          parentTarget.children[parentTarget.children.length-1].children[0].classList.remove('glyphicon-remove');
          parentTarget.children[parentTarget.children.length-1].children[0].classList.add('glyphicon-plus');

          parentTarget.children[parentTarget.children.length-1].style.transform = 'rotate(-112deg)';
          parentTarget.children[parentTarget.children.length-1].addEventListener('transitionend', onAnimationComplete);
          performAnimation( parentTarget.children[parentTarget.children.length-1]);
        }
      }
    };
  }]);
