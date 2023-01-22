import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter_Type'
})

export class FilterTypePipe implements PipeTransform{

    transform(value: any, arg: any): any {
        if(arg == '' || arg.length < 2 ) return value;
        const resultType = [];
        for(const post of value) {
            if(post.type.toLowerCase().indexOf(arg.toLowerCase()) > -1){
                resultType.push(post);
        };
    };
    return resultType;
    }
}