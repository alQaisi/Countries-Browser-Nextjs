type CLS_Props=(string | {[key:string]:null | undefined | boolean} )[]
export function cls(...classes:CLS_Props):string{
    const classNames:string[]=[];
    classes.forEach(class_name=>{
        if(typeof class_name==="string")
            return classNames.push(class_name);
        const key=Object.keys(class_name)[0];
        if(class_name[key])
            return classNames.push(key);
    });
    return classNames.join(" ");
}