export function setInfoUser(data: any): void {
    const infoUser: string | null = localStorage.getItem("userInfo");
    if(infoUser){
        const updateInfoUser: any = JSON.parse(infoUser);
        localStorage.setItem("userInfo", {
            ...updateInfoUser,
            ...data
        });
    } else {
        localStorage.setItem("userInfo", JSON.stringify(data));
    }

}


