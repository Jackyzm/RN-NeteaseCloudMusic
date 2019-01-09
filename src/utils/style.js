const padding = num => ({
    paddingTop: num,
    paddingRight: num,
    paddingBottom: num,
    paddingLeft: num,
});

const shadow = {
    elevation: 20,
    shadowOffset: { width: 0, height: 8 },
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
};

export { padding, shadow };
