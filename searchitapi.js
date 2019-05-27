export default {
    search: (item,sort,limit) =>{

       return fetch(`http://www.reddit.com/search.json?q=${item}&sort=${sort}&limit=${limit}`)
        .then((res)=>res.json())
        .then((data) => data.data.children.map((item) => item.data))
        .catch((err) => console.log(err))
    }
};