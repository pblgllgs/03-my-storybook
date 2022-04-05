/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
     * This is a description of the label prop.
     */
    label: string;
    /**
     * This is size by default.
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * This letter capitalized.
     */
    allCaps: boolean;
    /**
     * This is the color by defeault.
     */
    color: 'primary' | 'secondary' | 'tertiary';
    /**
     * What font color to use
     */
    fontColor?: string;
    /**
     * What font color to use
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ allCaps, color, label, size, fontColor, backgroundColor, }: MyLabelProps) => JSX.Element;
export default MyLabel;
