import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'vuela'
})
export class VuelaPipe implements PipeTransform {


    transform( valor: boolean ): string {
        if (valor) {
            return "sí";
        }
        return "no";
    }
    // return ( valor ) ? "Si" : "No"
    
}