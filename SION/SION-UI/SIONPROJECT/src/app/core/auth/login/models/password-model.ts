import { LoginModel } from "./login-model";

export interface PasswordModel extends LoginModel {
    passwordTapeFormCtrl: string;
}