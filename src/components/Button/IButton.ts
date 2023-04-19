import { Sizes } from '@/enums/Sizes';
import { VariantsEnum } from '@/enums/VariantsEnum';

export default interface Ibutton extends React.ComponentPropsWithoutRef<'button'> {
    variant?:
        | 'primary'
        | 'info'
        | 'warning'
        | 'danger'
        | 'outline-primary'
        | 'outline-info'
        | 'outline-warning'
        | 'outline-danger'
        | 'outline-cancel'
        | 'none'
        | 'none-info'
        | 'none-warning'
        | 'none-danger'
        | 'default';
    children: React.ReactNode;
    fullWidth?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    loading?: boolean;
    size?: Sizes;
}
