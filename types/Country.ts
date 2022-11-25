export type Country={
    borders:string[]
    capital:string | undefined
    alpha3Code:string,
    currencies:{
        code:string,
        name:string
        symbol:string
    }[],
    flag:string,
    flags:{svg:string,png:string}
    languages:{
        name:string,
        nativeName:string
    }[],
    name:string,
    nativeName:string,
    population:number
    region:string
    subregion:string,
    topLevelDomain:`.${string}`,
}