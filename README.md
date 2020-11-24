# VDI-Diff
<h1>Comparing Pixel-based Quality of Experience in Remote Desktop Applications</h1>
<h2>Description</h2>
These scripts below were used in a thesis work with the goal of proving that user Quality of Experience in a virtual desktop infrastructure environment can be measured in some way without having to change the source code of remote control applications or needing specialized hardware to intercept the traffic on the server-side. 
<br><br>
<b><i>This tool uses muliple tools combined, please make sure to download and install each tool before usage. </i></b><br>
<h2>Required tools:</h2>
<ul>
  <li>AutoHotKey: https://www.autohotkey.com/</li>
  <li>Auto Screen Capture: https://sourceforge.net/projects/autoscreen/</li>
  <li>Node.js: https://nodejs.org/en/</li>
  <li>BlinkDiff: https://github.com/yahoo/blink-diff</li>
</ul>
<h2>Optional tools:</h2>
<ul>
  <li>XNote Stopwatch: http://www.xnotestopwatch.com/</li>
  <li>Clumsy: https://jagt.github.io/clumsy/index.html</li>
</ul>
<h2>Usage:</h2>
<ol>
  <li>Start Auto Screen Capture.</li>
  <li>Connect with a remote control application to your target, enter fullscreen and press the hotkey for AutoHotKey to start.</li>
  <li>Take the screenshots, edit the BlinkDiff JavaScript file to the folder path, and run the script.</li>
</ol>
<i><h3>Optional:</h3></i>
<ul>
  <li>Start XNote Stopwatch on target client and change shortcut keys to match AutoHotKey script (^w)</li>
  <li>Start Clumsy and edit latency, drop rate or anything else to mimic networking trouble. </li>
 </ul>
 <hr>
 <i>Copyright 2020 © Sally Holm</i>
