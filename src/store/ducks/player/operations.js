import * as Actions from "./actions";

export const setPlayerTextures = (textures) => {
  return (dispatch) => {
    dispatch(
      Actions.setPlayerTextures({
        textures,
      })
    );
  };
};
export const setPlayerAnimationsTypes = (textures, animationTypes) => {
  const copyAnimationTypes = { ...animationTypes };
  textures.forEach((texture) => {
    const textureId = texture.textureCacheIds[0];
    for (const key in copyAnimationTypes) {
      if (textureId.indexOf(key) != -1) {
        copyAnimationTypes[key].push(texture);
      }
    }
  });
  return (dispatch) => {
    dispatch(
      Actions.setPlayerAnimationsTypes({
        copyAnimationTypes,
      })
    );
  };
};
export const setPlayerCurrentAnimationType = (animationType) => {
  const currentAnimationType = animationType;
  return (dispatch) => {
    dispatch(
      Actions.setPlayerCurrentAnimationType({
        currentAnimationType,
      })
    );
  };
};
export const setAnimationPlaying = (animationPlaying) => {
  return (dispatch) => {
    dispatch(
      Actions.setAnimationPlaying({
        animationPlaying,
      })
    );
  };
};
export const setCurrentDirectionType = (currentDirectionType) => {
  return (dispatch) => {
    dispatch(
      Actions.setCurrentDirectionType({
        currentDirectionType,
      })
    );
  };
};
