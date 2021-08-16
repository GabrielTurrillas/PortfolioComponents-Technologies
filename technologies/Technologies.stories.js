import Technologies from "./Technologies";
import frontend from './images/frontend.svg'

export default {
  title: 'Screens/technologies',
  component: Technologies
};

const Template = (args) => <Technologies {...args} />

export const Default = Template.bind({});
Default.args = {
  technologies: [
    {
      name: 'Front end',
      techs: ['HTML, CSS', 'JavaScript', 'ReactJS', 'React Hooks', 'Redux', 'React Context'],
      imgSrc: frontend
    }
  ]
}
