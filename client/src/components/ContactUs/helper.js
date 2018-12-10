/*eslint-disabled */
import React from "react";

function validateForm(check, data, field, err) {
  const { firstName, lastName, contactNumber, email } = data;

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
    firstName: {
      Validate: [
        {
          condition: firstName.length < 3,
          message: " Please Specify Your First Name . "
        },
        {
          condition:
            /\d/.test(firstName) ||
            /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(firstName),
          message: " Name Can Not Contain Numbers Or Any Special Character . "
        }
      ],
      elem: "firstName"
    },
    lastName: {
      Validate: [
        {
          condition: lastName.length < 3,
          message: " Please Specify You Last Name . "
        },
        {
          condition:
            /\d/.test(lastName) ||
            /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(lastName),
          message: " Name Can Not Contain Numbers Or Any Special Character . "
        }
      ],
      elem: "lastName"
    },
    email: {
      Validate: [
        {
          condition: !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email),
          message: "Please Provide A Valid Email"
        }
      ],
      elem: "email"
    },
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
