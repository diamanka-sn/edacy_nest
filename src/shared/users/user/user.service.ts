/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { TokenisationService } from '../token/tokenisation/tokenisation.service';

@Injectable()
export class UserService {

    constructor(private tokenService:TokenisationService){
        
    }
}
