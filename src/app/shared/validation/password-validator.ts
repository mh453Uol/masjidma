import { AbstractControl } from '@angular/forms';

export class PasswordValidator {

    static MatchPassword(controls: AbstractControl) {
        const password = controls.get('password').value;
        const confirmPassword = controls.get('confirmPassword').value;
        if (password !== confirmPassword) {
            controls.get('confirmPassword').setErrors({ MatchPassword: true })
        } else {
            return null;
        }
    }
}