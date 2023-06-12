
export interface LoginBody {
  usr: string;
  pwd: string;
}

/* eslint-disable import/no-anonymous-default-export */
export interface RegisterBody {
  email: string;
  full_name: string;
  redirect_to: string;
}

class Auth {
  public isLoggedIn(): boolean {
    return localStorage.getItem("token") !== null;
  }

  public async login(credentials: LoginBody): Promise<any> {
    try {
        if(credentials.usr === 'isaac@monievend.com' && credentials.pwd === 'yhYhVRHxYb'){
            return true;
        }
    } catch (error) {
        console.log(error)
        return false;
    }
  }



  public saveUser(userInfo: any): void {
    const user = { ...userInfo.message, full_name: userInfo.full_name };
    localStorage.setItem("user", JSON.stringify(user));
  }

  public logout(): void {
    localStorage.removeItem("token");
  }
}
export default new Auth();
