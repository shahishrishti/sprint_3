const deleteDriverAction = (driver)=> {
    return {
      type: 'DELETE_DRIVER',
      payload: driver
    }
  }

  export default deleteDriverAction;