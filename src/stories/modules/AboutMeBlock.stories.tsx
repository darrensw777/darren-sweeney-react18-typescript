import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AboutMeBlock } from 'modules';

//👇 This default export determines where your story goes in the story list
export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'modules/AboutMeBlock',
    component: AboutMeBlock,
} as ComponentMeta<typeof AboutMeBlock>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof AboutMeBlock> = (args) => <AboutMeBlock {...args} />;

export const Block = Template.bind({});

Block.args = {
    /*👇 The args you need here will depend on your component */
    copy: {
        general: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus risus velit, sed dapibus est iaculis at. Cras fringilla mauris ullamcorper, euismod massa quis, hendrerit sem. Vivamus mollis elementum mi, id ornare velit consequat eget. Mauris at justo et dolor rhoncus euismod. Curabitur rutrum congue lacus, ut varius nisi. Phasellus mattis lorem ac iaculis condimentum. Duis condimentum auctor viverra. Duis vel eros ligula. Nullam suscipit tortor eget sodales commodo. Sed porttitor dictum nisl vitae mollis. Proin feugiat eros felis, id rutrum augue scelerisque vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed vitae lacus tempor, semper orci et, fringilla tellus. Quisque nisi velit, egestas sit amet mauris sed, cursus cursus felis. Integer fermentum mi id arcu mattis, sed blandit ante dictum.', 'Mauris ultrices ipsum at metus semper semper.Nam feugiat dapibus nibh non posuere.Duis sit amet ligula dapibus, maximus quam in, tincidunt ligula.Vestibulum et velit a tortor faucibus fringilla.In ante nisi, vehicula vitae dapibus ac, tempor non eros.Fusce vitae massa eu nulla porttitor sagittis.In est diam, tincidunt ut erat a, lobortis tempus metus.Proin fermentum consectetur libero, vel egestas leo facilisis ac.Nunc id est sit amet mauris consequat elementum sit amet at ex.Praesent est velit, tempor sit amet eleifend sit amet, elementum sit amet lectus.Sed blandit lobortis nibh.Nunc ut massa eu elit viverra euismod id nec ante.Nulla ullamcorper sit amet quam sit amet volutpat.Fusce laoreet iaculis tortor.', 'Nunc congue mauris et dolor tempus, vitae eleifend dui blandit.Aliquam erat volutpat.Proin tincidunt placerat turpis ut lobortis.Pellentesque eu tincidunt ligula.Maecenas dignissim pretium pellentesque.Praesent porta ac quam a pretium.Proin fringilla ullamcorper ullamcorper.Pellentesque leo mi, aliquam ut suscipit sit amet, sodales ut ex.Sed commodo tempor nisl vel tempor.Sed nunc augue, tincidunt quis tellus non, tempor laoreet dolor.Integer consectetur nibh sed auctor gravida.Ut ut leo lectus.Mauris molestie placerat purus, id facilisis urna consectetur nec.Etiam viverra odio nec tincidunt ultricies.Aenean rutrum enim augue, ut malesuada lacus malesuada tempor.', 'Nam nec metus dolor.Donec posuere non orci a fermentum.Proin molestie sodales cursus.Nulla quis mollis sapien, in ultrices lorem.Pellentesque est lectus, semper ut sodales non, congue id risus.Aenean fermentum orci enim, vel cursus sapien ultrices et.Suspendisse tempus rhoncus lectus.Curabitur tempor erat id gravida suscipit.Mauris blandit congue sagittis.Duis ac sodales dui.In lacinia consequat gravida.Nullam rutrum sollicitudin mi.'],
        greetings: {
            morning: 'morning',
            afternoon: 'afternoon',
            evening: 'evening',
        },
        interests: [{
            question: 'question 1',
            answers: ['answer1', 'answer2', 'answer3']
        }, {
            question: 'question2',
            answers: ['answer1', 'answer2', 'answer3']
        }]
    }
};