/* 
    Script to compare screenshots in folder A to screenshots in folder B. 
    Output get sent to output folder and output TXT. 
    
    2020-10-04
*/
// Modules
var BlinkDiff = require('blink-diff');
var fs = require('fs');
// Variables
var FolderA, FolderB, OutputFolder, OutputFile, pixeldiff, pixeltotal, images;

// Folder and file paths
FolderA = './A/'
FolderB = './B/'
OutputFolder = FolderB.concat('Output/')
OutputFile = 'Output.txt'
pixeldiff = [];
pixeltotal = [];

// Read folder and for each file, run function
fs.readdir(FolderA,(err,files) => {
    images = files.length;
    files.forEach(file => {
        if (file.endsWith('.png')){
            // Specify function parameters
            var diff = new BlinkDiff({
                // Threshold type (pixel or percent), threshold for detecting difference 
                thresholdType: BlinkDiff.THRESHOLD_PERCENT,
                threshold: 0.001,
                // Delta threshold for colour differences. 
                delta: 2,
                /* Block out 100 pixels of each side of images to remove false positive from remote control icons, clock or notifications. 
                   This is based on 1920 x 1080 images, please edit if other dimensions are used. 
                   First is to remove TeamViewer bar and VNC bar. Second is to remove widows taskbar and clock. Third is to remove TeamViewer bar on the left. Fourth is to remove Activate Windows watermark. 
                */
                blockOut: [{x:0,y:0,width:1920,height:30},{x:0,y:1040,width:1920,height:80},{x:1890,y:0,width:30,height:1080},{x:1600,y:950,width:320,height:130}],

                // Path to folders
                imageAPath: FolderA.concat(file),
                imageBPath: FolderB.concat(file),
                imageOutputPath: OutputFolder.concat(file),
            });
            // Run function
            diff.run(function (error, result){
                // Add difference to array, calculate total sum of each array and use to calculate average difference. Write output to TXT. 
                pixeldiff.push(result.differences);
                pixeltotal.push(result.dimension);
                if (pixeldiff.length == images ) {
                    var pixelsum = pixeldiff.reduce(function(a, b){
                        return a + b;
                    }, 0);
                    var dimensionsum = pixeltotal.reduce(function(a, b){
                        return a + b;
                    }, 0);
                    var percentdifference = Math.round(((pixelsum / images) / (dimensionsum / images)) * 10000) / 100 + '%\n';
                    fs.appendFileSync(OutputFolder.concat(OutputFile),percentdifference);
                    console.log(percentdifference);
                    console.log('Done')
                }
            });
        }
    }); 
});
