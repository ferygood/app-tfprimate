import React from 'react';

// Function to render the run.html content
const RenderRunHTML = () => {

  const runHTMLContent = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="./jalview-js/swingjs/swingjs2.js"></script>
    <script>
      if (!self.SwingJS)alert('swingjs2.js was not found. It needs to be in swingjs folder in the same directory as ' + document.location.href)
      Info = {
        code: null,
        main: "jalview.bin.Jalview",
        core:"jvexamplefile",
        readyFunction: null,
        serverURL: 'https://chemapps.stolaf.edu/jmol/jsmol/php/jsmol.php',
        j2sPath: './jalview-js/swingjs/j2s',
        console:'sysoutdiv',
        allowjavascript: true,
        
        //Jalview-specific:
        // note that desktop-frame-div has been set to display:none
        jalview_SCREEN_WIDTH: 100, // desktop width -- 0 to hide
        jalview_SCREEN_HEIGHT: 70,  // desktop height -- 0 to hide
        jalview_SCREEN_X: 10,
        jalview_SCREEN_Y: 10,
        jalview_EMBEDDED: true
      }
    </script>
  </head>
  <body>
    <table><tr><td>
      <!-- note that the desktop must have a z-index ge 1000 because it is the root of all popups -->
      <div id="jalview-desktop-div" style="z-index:1000;position:relative;top:0px;left:0px;width:300px;height:70px">desktop here</div>
      </td></tr><tr><td>
      <div id="jalview-alignment-div" style="position:relative;top:0px;left:0px;width:600px;height:400px;  resize: both; overflow: auto;">
      The alignment frame will appear here momentarily...
      </div>
      </td></tr><tr>
    </tr></table>
    <script>
      SwingJS.getApplet('JalviewJSEmbedded', Info)
      getClassList = function(){J2S._saveFile('_j2sclasslist.txt', Clazz.ClassFilesLoaded.sort().join('\n'))}
    </script>
    <div hidden style="position:absolute;left:900px;top:30px;width:600px;height:300px">
      <div hidden id="sysoutdiv" style="border:1px solid green;width:100%;height:95%;overflow:auto; resize:both;"></div>
      <a hidden href="javascript:JalviewJS._clearConsole()">clear it</a>
      <a hidden href="javascript:getClassList()">get _j2sClassList.txt</a>
    </div>
  </body>
  </html>
  `;
  return <div dangerouslySetInnerHTML={{ __html: runHTMLContent }} />;
};

export default RenderRunHTML;