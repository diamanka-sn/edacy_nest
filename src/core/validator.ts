/* eslint-disable prettier/prettier */
import { ValidatorOptions, ValidationError } from "class-validator";

export interface ValidatorPipeOptions extends ValidatorOptions {
    transform?:boolean;
    disableErrorMessage?:boolean;
    exceptionFactory?:(errors:ValidationError[])=>any
}