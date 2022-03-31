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
}

export const MyLabel = ({
  allCaps = false,
  color = 'primary',
  label = 'No Label',
  size = 'normal',
  fontColor,
}: MyLabelProps) => {
  return (
    <span className={`label ${size} text-${color}`} style={{color : fontColor}}>
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};