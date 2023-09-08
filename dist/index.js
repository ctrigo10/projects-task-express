"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const database_1 = require("./database/database");
require("dotenv/config");
const logger_1 = __importDefault(require("./logs/logger"));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        console.clear();
        yield database_1.sequelize.sync({ force: false });
        const PORT = process.env.PORT;
        app_1.default.listen(PORT);
        logger_1.default.info(`Server on port ${PORT}`);
        logger_1.default.error('Server on port ');
    });
}
main();
//# sourceMappingURL=index.js.map