/**
 * Create an immutable object.
 * If tried to change, update or delete the changes initiated should be logged.
 * Timestamp and object should be logged on through localstorage or memoization.
 */

 const car = {
    driver : "Dhanush Priyan",
    car : "Tesla model X",
    duration: "3hr",
    location : {
      from : "Ooty",
      to : "Coimbatore"
    },
  }
  
  // Object Handler
  const carHandler = {
    set : (obj, prop, val) => {
      if(Object.isFrozen(obj)) {
        console.group("EL16 - Trying to Update Value")
        console.log(obj.constructor.name , prop, "is restricted from Updating")
        var timestamp = Date.now()
        console.log("Timestamp", timestamp)
        localStorage.setItem("Object", obj.constructor.name)
        localStorage.setItem("Action", "update")
        localStorage.setItem("TimeStamp", timestamp)
        console.groupEnd()
      } else {
        console.log("Object Not Frozen")
      }
      
    },
  
    get : (obj, prop) => {
      if(prop in obj) {
        return obj[prop]
      } else {
        console.group("EL38 - Trying to Read Value not Available")
        console.log("Timestamp", Date.now())
        var timestamp = Date.now()
        localStorage.setItem("Object", obj.constructor.name)
        localStorage.setItem("Action", "Read")
        localStorage.setItem("TimeStamp", timestamp)
        console.groupEnd()
      }
    },
  
    deleteProperty(obj, prop, receiver){
      // console.log("Delete prop", Object.isSealed(obj), prop in obj, prop, obj)
      if(Object.isSealed(obj) && prop in obj) {
        console.group("EL60 Attempting to Delete")
        var timestamp = Date.now()
        localStorage.setItem("Object", obj.constructor.name)
        localStorage.setItem("Action", "delete")
        localStorage.setItem("TimeStamp", timestamp)
        console.log("EL60", prop, "is Sealed and cannot be deleted")
        console.groupEnd()
      }
    },
  
  }
  
  //Proxy Setting
  const carProxy = new Proxy(trip, carHandler)
  
  //Update
  Object.freeze(carProxy)
  carProxy.paymentMode = "Cash"
  
  //Read
  console.log(carProxy.paymentMode)
  
  //Delete
  Object.seal(carProxy)
  delete carProxy["location"]
  console.log(carProxy["location"])