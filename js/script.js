const app= new Vue(
    {
        el: "#app" ,
        data:{
            newtodo:"",
            todo:[
                "sistemare mark III",
                "addestrare spider-man",
                "comprare pupazzo coniglio per Pepper",
                "giocare con Morgan",

            ]
        },
        methods:{
            addtodo(){
                this.todo.push(this.newtodo);
                this.newtodo="";
            },
            removetodo(index){
                this.todo.splice(index,1);
            }
        },
    }
);