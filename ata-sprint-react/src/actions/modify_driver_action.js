const modifyDriverAction = (driver)=> {
    return {
      type: 'EDIT_DRIVER',
      payload: driver
    }
  }

  export default modifyDriverAction;