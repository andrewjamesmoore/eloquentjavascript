/* 
write a loop to console.log() to output the following triangle:
#
##
###
####
#####
######
#######
*/
"use strict";

for (let brick = "#"; brick.length < 8; brick += "#") {
  console.log(brick);
}
