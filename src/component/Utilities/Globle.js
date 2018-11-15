const planGlobel={
    groupid:"",
    groupname:"",
    userid:"",
    username:"",
    tagid:"" ,
    tagname:"" ,
    addclosemodel:false,
    setValue:function(key,id,name){
        switch(key){
            case "group":this.groupid=id;this.groupname=name;break;
            case "user":this.userid=id;this.username=name;break;
            case "tags":this.tagid=id;this.tagname=name;break;
            default:break;
        }
    },
    getValue:function(key){
        let newobj={id:"",name:""}
        switch(key){
            case "group":newobj.id=this.groupid;newobj.name=this.groupname;break;
            case "user":newobj.id=this.userid;newobj.name=this.username;break;
            case "tags":newobj.id=this.tagid;newobj.name=this.tagname;break; 
        }
        return newobj
    },
    clearAll:function(type){
        switch(type){
            case "group":
            this.groupid="";
            this.groupname="";break;
            case "user":
            this.userid="";
            this.username="";break;
            case "tags":
            this. tagid="" ;
            this.tagname="" ;break;
            default:
            this.groupid="";
            this.groupname="";
            this.userid="";
            this.username="";
            this. tagid="" ;
            this.tagname="" ;
        }
    
        
    }

}
export default planGlobel