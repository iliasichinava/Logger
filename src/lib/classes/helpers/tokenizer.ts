import { Format } from "lib/interfaces/logger";

export class Tokenizer {
    
    constructor(private has_time: boolean, private format_pattern: Format) {}

    public format(event_name: string, ...args: any[]): string {
        // Handle time
        let time = this.has_time ? new Date().toLocaleDateString(): "";
        
        // Handle format
        let rest = "";

        for(let arg of args) {
            switch(this.format_pattern) {
                case Format.CapitalCase:
                    rest += this.capitalize(arg.toString());
                    break;
                case Format.Uppercase:
                    rest += arg.toString().toUpperCase();
                    break;
                case Format.Lowercase:
                    rest += arg.toString().toLowerCase();
                    break;
            }    
        }

        // Handle messages
        let result = `[${time}] [${event_name.toUpperCase()}] ${args}`;
        return result;
    }

    private capitalize(input: string): string {
        const words = input.split(" ");
      
        const capitalized = words.map((word) => {
          return word.charAt(0).toUpperCase() + word.slice(1);
        });
      
        const result = capitalized.join(" ");
      
        return result;
    }


}