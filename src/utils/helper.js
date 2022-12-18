const fs = require("fs");
const path = require("path");


exports.uploadFile = async (req, res, next) => {
  try {
    let data = [];
    if (req.files === undefined || req.files === null) {
      req.images = "no-Image";
      next();
    } else {
      let index = 0;
      let file = req.files.file ?? 0;

      if (file.length > 1) {
        while (index < file.length) {
          console.log(file[index].name);
          file[index].name = `photo_${Date.now()}_${
            path.parse(file[index].name).ext
          }`;
          file[index].mv(
            `${process.env.FILE_UPLOAD_PATH}/${file[index].name}`,
            async (err) => {
              if (err) {
                return next(err);
              }
            }
          );
          data.push(file[index].name);
          index++;
        }
        req.images = data;
        next();
      } else {
        file.name = `photo_${Date.now()}_${path.parse(file.name).ext}`;
        file.mv(`${process.env.FILE_UPLOAD_PATH}/${file.name}`, async (err) => {
          if (err) {
            throw err;
          }
        });

        req.images = file.name;
        next();
      }
    }
  } catch (e) {
    next(e);
  }
};

exports.deleteFile = (fileName) => {
  try {
    if (fileName === undefined || fileName == "no-Image") {
      throw "There is no file to delete";
    } else {
      if (fileName instanceof Array && fileName.length > 1) {
        fileName.forEach((element) => {
          fs.access(
            `${process.env.FILE_UPLOAD_PATH}${element}`,
            function (exists) {
              if (exists) {
                //Show in green
                console.log(`${process.env.FILE_UPLOAD_PATH}/${element}`);
                console.log("File exists. Deleting now ...");
                fs.unlink(
                  `${process.env.FILE_UPLOAD_PATH}${"/"}${element}`,
                  function (err) {
                    if (err) {
                      console.log(err);
                      return;
                    }
                  }
                );
              } else {
                //Show in red
                console.log("File not found, so not deleting.");
              }
            }
          );
        });
      } else {
        console.log(fileName);
        fs.access(
          `${process.env.FILE_UPLOAD_PATH}${fileName}`,
          function (exists) {
            if (exists) {
              //Show in green
              console.log(`${process.env.FILE_UPLOAD_PATH}/${fileName}`);
              console.log("File exists. Deleting now ...");
              fs.unlink(
                `${process.env.FILE_UPLOAD_PATH}${"/"}${fileName}`,
                function (err) {
                  if (err) {
                    console.log(err);
                    return;
                  }
                }
              );
            } else {
              //Show in red
              console.log("File not found, so not deleting.");
            }
          }
        );
      }
    }
  } catch (e) {
    console.log(e);
  }
};
