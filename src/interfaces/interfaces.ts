
export interface Headers {
    id: string,
    label: string,
    top?: string,
    left?: string,
    height?: string,
    width?: string,
    options?: Options[]
    dropbox?:string
}

export interface Options {
    id: string,
    name: string,
    icon?: string
}


export interface InitState {
    dropFeatures:boolean,
    dropCompany:boolean
}

export interface Action{
    type:string|undefined
}

export interface SimilarProps {
    setshowSidebar:React.Dispatch<React.SetStateAction<any>>;
    showSidebar: boolean;
  }