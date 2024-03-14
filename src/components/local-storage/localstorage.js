const getDataFromLocal = () =>{
    const data = localStorage.getItem('bookmarked')
    if(data){
        const newdata = JSON.parse(data)
        return newdata
    }
    return []
}
const addtothestorage =(data) =>{
    const tostore = JSON.stringify(data)
    localStorage.setItem('bookmarked', tostore)
}
const setdata = (bookmark) =>{
    const localdata = getDataFromLocal();
    localdata.push(bookmark)
    addtothestorage(localdata)
}
export { setdata, getDataFromLocal };