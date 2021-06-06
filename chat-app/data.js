const data  ={users:[{ 
    id:1,
    email:'jessica@costa', 
    name:'jessica',
    avatarUrl:'homem'
}, { 
    id:1,
    email:'jessica@costa', 
    name:'jessica',
    avatarUrl:'homem'
},{ 
    id:1,
    email:'jessica@costa', 
    name:'jessica',
    avatarUrl:'homem'
}
],messages:[
    {
        id:crypto.randomBytes(40).toString(),userId: 1,
        body:'Something really '+crypto.randomBytes(20).toString(),
        createdAt: Date.now()
    }, 
    {
        id:crypto.randomBytes(40).toString(),userId: 1,
        body:'Something really '+crypto.randomBytes(20).toString(),
        createdAt: Date.now()
    }, 
    {
        id:crypto.randomBytes(40).toString(),userId: 1,
        body:'Something really '+crypto.randomBytes(20).toString(),
        createdAt: Date.now()
    }, 
    
]
};
module.exports = data;