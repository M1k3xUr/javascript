/**
 * Adding inital url path to have the hability of testing links and images without damaging the original code.
 * Create by Maikel Urquijo
 * @url https://github.com/M1k3xUr
 */
function deliverMedia(theURL){
    const lnk = theURL,
          tl = ['source', 'img', 'video', 'a', 'div'];
      document.onreadystatechange = () => {
          if (document.readyState === "complete") {
              tl.forEach(ex => {
                  tagLinks(ex);
              });
          }
      };
      /*media images tag*/
      function tagLinks(theTag){                
          let theBigTag = document.querySelectorAll(theTag);
          theBigTag.forEach(el => {
              switch (theTag) {
                  case 'source':
                      el.setAttribute('srcset', lnk + el.getAttribute('srcset'));
                      break;
                  case 'img':
                      el.setAttribute('src', lnk + el.getAttribute('src'));
                      break;
                  case 'video':
                      el.setAttribute('src', lnk + el.getAttribute('src'));
                      if(el.hasAttribute('poster')){
                          el.setAttribute('poster', lnk + el.getAttribute('poster'));
                      }
                      break;
                  case 'a':
                      el.setAttribute('href', lnk + el.getAttribute('href'));
                      el.setAttribute('target', '_blank');
                      break;
                  case 'div':
                      if(el.hasAttribute('style')){
                          if(el.style.backgroundImage != ''){
                            var oldlnk = el.style.backgroundImage;
                            if(oldlnk){
                                var opb = oldlnk.match(/url\(["']?(.*?)["']?\)/)[1];
                            }
                            el.style.backgroundImage = `url('${lnk + opb}')`;
                        }               
                      }
                      break;
              
                  default:
                      break;
              }
          });
      }
}
      
