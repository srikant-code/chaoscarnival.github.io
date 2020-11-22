import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
	root: {
    height: "100%",
		marginTop: '10vh',
		marginBottom: '15vh',
		display: "flex",
		flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  
  	speakerRoot: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "center",
		marginTop: '7vh',
    width: "80%",
    [theme.breakpoints.down("xl")]: {
      maxWidth:"1200px",
      width: "90%",
    },
    [theme.breakpoints.down("lg")]: {
      width: "75%",
		},
    [theme.breakpoints.down("md")]: {
      width: "95%",
      },
    [theme.breakpoints.down("xs")]: {
      width: "95%",
      marginLeft: theme.spacing(-7.5)
		},
	},
	headingspeaker: {
    display: "flex",
    flexDirection: "row",
    position:"relative",
    width: "70%",
    padding: "0 1rem",
    paddingTop: "5rem",
    alignSelf:"center",
    marginBottom: theme.spacing(3),
		[theme.breakpoints.down("md")]: {
      width: "80%",
		}
  },
  ourExcitingText: {
    fontWeight: 700, 
    textAlign: 'left',
    fontSize: '70px',
		color: '#262626',
    [theme.breakpoints.down("md")]: {
      fontSize: '50px',
		},
      [theme.breakpoints.down("sm")]: {
        fontSize: '50px',
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: '30px',
      },
	},

  speakersText: {
		fontWeight: 700, 
		background: 'linear-gradient(270.88deg, #FFDC7E 3.66%, #FF7C71 100.95%)', 
		borderRadius: '1rem',
    fontSize: '70px',
    textAlign: 'center',
    color: '#000000',
    [theme.breakpoints.down("md")]: {
      fontSize: '50px',
		},
    [theme.breakpoints.down("sm")]: {
      fontSize: '50px',
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: '30px',
    },
  },

  chaosExpertsFrom: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      justifyContent: "left",
		},
  },

  chaosExpertsText: {
		fontWeight: 700, 
		background: 'linear-gradient(270.88deg, #613DC1 3.66%, #BF83FF 100.95%)', 
		borderRadius: '1rem',
    fontSize: '70px',
    textAlign: 'center',
    color: '#FFFFFF',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      fontSize: '50px',
		},
    [theme.breakpoints.down("sm")]: {
      fontSize: '50px',
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: '26px',
    },
  },

  fromText: {
    fontWeight: 700, 
    marginLeft: theme.spacing(3),
    textAlign: 'left',
    fontSize: '70px',
		color: '#262626',
    [theme.breakpoints.down("md")]: {
      fontSize: '50px',
		},
      [theme.breakpoints.down("sm")]: {
        fontSize: '50px',
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: '30px',
        marginLeft: 0,
      },
  },
  
  cfpSection: {
    display: "flex",
    flexDirection: "row",
    position:"relative",
    width: "70%",
    padding: "0 1rem",
    alignSelf: "center",
    justifyContent: 'space-around',
    marginBottom: theme.spacing(3),
		[theme.breakpoints.down("md")]: {
      width: "80%",
		}
  },

   moreText: {
    textAlign: 'center',
    fontSize: '36px',
		color: '#8193B2',
    [theme.breakpoints.down("md")]: {
      fontSize: '24px',
		},
      [theme.breakpoints.down("sm")]: {
        fontSize: '24px',
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: '14px',
      },
  },
   
  applyButton: {
    display: "flex",
    flexDirection: "row",
    position:"relative",
    margin: 'auto',
    alignSelf: "center",
    justifyContent: 'space-around',
    marginTop: theme.spacing(1),
   },
   
   cfpButton: {
     height: '3.5rem',
		width: "fit-content",
    minWidth: '18.5rem',
		[theme.breakpoints.down("xl")]: {
      height: '3.5rem',
		},
		[theme.breakpoints.down("lg")]: {
			height: '3rem',
		},
		[theme.breakpoints.down("md")]: {
			height: '2.5rem',
		},
		[theme.breakpoints.down("sm")]: {
			marginTop: "20vh",
			height: '2rem',
		},
		[theme.breakpoints.down("xs")]: {
			marginTop: "20vh",
			height: '2rem',
		},
	},
	cfpText:{
		fontSize: '16px',
		[theme.breakpoints.down("xl")]: {
			fontSize: "16px",
		},
		[theme.breakpoints.down("lg")]: {
			fontSize: "16px",
		},
		[theme.breakpoints.down("md")]: {
			fontSize: "14px",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "12px",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: "8px",
		},
	},
}));
