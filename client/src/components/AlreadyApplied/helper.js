/*eslint-disable */
import React from "react";

function validateForm(check, data, field, err) {
  const { studentCnic, contactNumber, email } = data;

  var errors = err
    ? err
    : {
        hasError: false,
        errorsObj: {}
      };
  // function hasNumber(myString) {
  //   return;
  // }

  let Validation = {
    
    studentCnic: {
      Validate: [
          {
              condition: studentCnic.length !== 13,
              message: " Please enter your full CNIC number. CNIC # should contain only 13 digits. ",
          }, {
              condition: !/\d/.test(studentCnic) || /^(?!\d+$)(?:[a-zA-Z0-9][a-zA-Z0-9 @&$]*)?$/.test(studentCnic),
              message: " CNIC Should Have Numbers Only. ",
          }, {
              condition: /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(studentCnic),
              message: " No Space Hyphens '-' Or Any Special Character. ",
          }
      ],
      elem: "studentCnic"
    },
    /*
    contactNumber: {
      Validate: [
        {
          condition: contactNumber.indexOf("03") !== 0,
          message: "Please Provide a Valid Number."
        },
        {
          condition: contactNumber.length !== 11,
          message: "Length Must Be Equal To 11."
        },
        {
          condition:
            !/\d/.test(contactNumber) ||
            /^(?!\d+$)(?:[a-zA-Z0-9][a-zA-Z0-9 @&$]*)?$/.test(contactNumber),
          message: " Should Have Numbers Only . "
        },
        {
          condition: /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(
            contactNumber
          ),
          message: "No Space Hyphens '-' Or Any Special Character."
        }
      ],
      elem: "contactNumber"
    }
    ,
    email: {
      Validate: [
        {
          condition: !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email),
          message: "Please Provide A Valid Email"
        }
      ],
      elem: "email"
    },*/
  };
  if (check === "all") {
    for (var i in Validation) {
      var conArray = Validation[i].Validate;
      errors.errorsObj[Validation[i].elem] = { message: [] };
      for (var j = 0; j < conArray.length; j++) {
        if (conArray[j].condition) {
          errors.hasError = true;
          errors.errorsObj[Validation[i].elem].message.push(
            conArray[j].message
          );
        }
      }
      if (!errors.errorsObj[Validation[i].elem].message.length) {
        errors.errorsObj[Validation[i].elem] = undefined;
      }
    }
    return errors;
  }
  if (check === "each") {
    let conArray = Validation[field].Validate;
    errors.errorsObj[Validation[field].elem] = { message: [] };
    for (var k = 0; k < conArray.length; k++) {
      if (conArray[k].condition) {
        errors.hasError = true;
        errors.errorsObj[Validation[field].elem].message.push(
          conArray[k].message
        );
      }
    }
    if (!errors.errorsObj[Validation[field].elem].message.length) {
      errors.errorsObj[Validation[field].elem] = undefined;
    }
    return errors;
  }

  return errors.hasError
    ? errors
    : {
        hasError: false
      };
}

const Loader = () => {
  return (
    <div className="LoaderContainer">
      <div className="loader">
        <div className="lds-ring">
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    </div>
  );
};

export { validateForm, Loader };
