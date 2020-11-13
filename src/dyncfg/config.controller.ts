import { Controller, Get, Res, HttpStatus } from "@nestjs/common";
import { ConfigService } from "./config.service";

@Controller()
export class ConfigController {
    constructor() {
        console.log('ConfigController constructor');
    }

    @Get('config')
    async getAllConfig() {
        return "current config"
    }
}