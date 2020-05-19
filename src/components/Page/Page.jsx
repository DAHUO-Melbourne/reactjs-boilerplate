/** @format */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledPage = styled.div`
  box-sizing: border-box;
  width: 1080px;
  height: 100vh;
  margin: 0 auto;
  padding: 1rem;
`;

const Layout = styled.div`
  display: grid;
  grid-row-gap: 2rem;
`;

const Body = styled.section``;

function Page({ className, children }) {
  return (
    <StyledPage>
      <Layout className={className}>
        <Body>{children}</Body>
      </Layout>
    </StyledPage>
  );
}

Page.defaultProps = {
  className: '',
};

Page.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export { Page };

/**
 * children props的语法是在这个链接中：https://zh-hans.reactjs.org/docs/composition-vs-inheritance.html
 * 有些组件无法提前预知其内部的内容，尤其是该组件作为一个container/wrapper的时候，他无法提前得知其内部的组件是什么，所以
 * 就有了children这个props，由于该组件的内容无法提前传入，但是可以通过在调用该组件的时候，将内容再写在该组件的内部
 */
