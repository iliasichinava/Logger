/*
    TypeScript-ზე დაწერე ლოგერის ბიბლიოთეკა რომელსაც გამოიყენებს შენი თიმი პროექტებში, 
    ლოგერი უნდა დაწერო OOP-ს პრინციპების გამოყენებით, ლოგერს შეუძლია მიიღოს ტრანსპორტი რომელიც ლოგების
    ჩაწერაზე/გაგზავნაზე იზრუნებს, დეფოლტად ლოგერს ექნება ტრანსპორტი console რომელიც stdout-ში გამოიყვანს ლოგებს,
    ტრანსპორტად შეიძლება გადავცეთ UDP, TCP ან ნებისმიერი custom ტრანსპორტი.
    ტრანსპორტის გარდა შეგვიძლია გადავცეთ პატერნი და ლეველი, პატერნი განსაზღვრავს ლოგის ფომრატს,
    ლეველი განსაზღვრავს მინიმალურ ლეველს რომელიც უნდა დაილოგოს. მაგალითად:
    const logger = Logger.getLogger({ format: '%t - %s', level: Levels.WARN }); 
    //transport-ს არ გადავცემ ამიტომ კონსოლში უნდა დაილოგოს

    logger.error('error happened', new Error()); // რადგან Error უფრო მაღალი ლეველის ლოგის ვიდრე WARN ვლოგავთ
    logger.warn('warning message'); // რადგან მინიმალური ლეველია WARN ვლოგავთ
    logger.debug('dummy log'); //  არ ვლოგავთ რადგან DEBUG-ს ლეველი ნაკლებია WARN-ზე 
    პირველ რიგში მოიფიქრე რა კლასებს გამოიყენებ ამ აპლიკაციის ასაწყობად, რა მეთოდები და პროპერთები ექნებათ,
    როგორ შექმნი და დააკავშირებ ამ კლასებს ერთმანეთთან. თუ რამე ვერ გაიგე მკითხე
*/

import { Logger } from "lib/classes/logger";
import { Format, Level } from "lib/interfaces/logger";

const logger = Logger.get_logger({ include_time: true, format: Format.Uppercase, level: Level.Debug });

// logger.debug("d\n", { ilia: "magaria" }.ilia);
logger.warn("w\n");
logger.error("e\n");
logger.set_level(Level.Error);
logger.debug("d\n");