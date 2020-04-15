import React from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from "@material-ui/core/Divider";
import Drawer from '@material-ui/core/Drawer';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Collapse from "@material-ui/core/Collapse";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {compose} from 'recompose';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import logo from './logo.png';
import { Route, withRouter, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import Voucher from './Voucher';
import Cards from './Cards';
import Fastag from './Fastag';



const SidebarItem=({ label, path ,component,routes, depthStep = 10, depth = 0,expanded, ...rest }) =>{

    const [hover,setHover]=React.useState(false);
    const [collapsed, setCollapsed] = React.useState(true);
     let toggleCollapse=()=> {
              setCollapsed(prevValue => !prevValue);
            }
                  

    let onClick=(e)=> {
      if (Array.isArray(routes)) {
        toggleCollapse();
      }
    //   if (onClickProp) {
    //     onClickProp(e, item);
    //   }
    }
    let expandIcon;

    if (Array.isArray(routes) && routes.length) {
              expandIcon = !collapsed ? (
                <ExpandLessIcon
                  className={
                    "sidebar-item-expand-arrow" + " sidebar-item-expand-arrow-expanded"
                  }
                />
              ) : (
                <ExpandMoreIcon className="sidebar-item-expand-arrow" />
              );
            }

    let hoverColor;

    let toggleHover=()=>{
        setHover(prevValue => !prevValue);
    }
    if (hover) {
        hoverColor = {backgroundColor: 'red'}
  } else {
        hoverColor = {backgroundColor: 'transparent'}
            }

    return (
      <>
      <Link style={{textDecoration:'none'}} to={ path } >
        <ListItem style={hoverColor} onMouseEnter={toggleHover} onMouseLeave={toggleHover} button dense {...rest} onClick={onClick}>
        
          <ListItemText style={{ paddingLeft: depth * depthStep }} className="sidebar-item-content">
            <span className="sidebar-item-text">{label}</span>
          </ListItemText>
          
      
        {expandIcon}
        </ListItem>
        </Link>
        <Collapse in={!collapsed} timeout="auto" unmountOnExit>
        {Array.isArray(routes) ? (
          <List disablePadding dense>
            {routes.map((subItem) => (
              <SidebarItem
                key={subItem.name}
                depth={depth + 2}
                depthStep={depthStep}
                {...subItem}
              />  
                       
               ))}
          </List>
        ) : null}
        </Collapse>
        {/* {Array.isArray(routes) ? (
            <div>
              {routes.map((route,index) => (
                <Route key = {`${route.name}${index}`} path={route.path} exact={route.exact} component={route.component} />  
                ))} 
            </div>
        ) :<Route key = {`${routes.name}`} path={routes.path} exact={routes.exact} component={routes.component} /> 
        }   */}
       </>
    )
  }
  
  
const Sidebar=({ routes, depthStep, depth, expanded })=> {
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
      };
    
      const handleDrawerClose = () => {
        setOpen(false);
      };
      let direction;
      direction = !open ? (
        <ChevronLeftIcon />

      ) : (
        <ChevronRightIcon />
      );
    return (
    <div className="root"> 
      <CssBaseline />
      <AppBar
        position="fixed"
        style={{backgroundColor: 'currentColor'}}
        className={!open? "shiftTextLeft" : "shiftTextRight"}
      >
        <Toolbar className="toolbar">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={!open ? handleDrawerOpen: handleDrawerClose}
            edge="start"
            className="menuButton"
          > 
            <img src={logo} className={!open ? "logo-show" : "logo-hide"} alt="blackbuck logo" style={{paddingLeft:10,paddingRight:10}}/>
            <MenuIcon style={{color:'black'}} />
          </IconButton>
          <Typography style={{color:'black',fontSize:'20'}} noWrap>
            Admin Dasboard
          </Typography>
          
        </Toolbar>
      </AppBar>
      <Drawer
        className="drawer"
        variant="persistent"
        anchor="left"
        open={open}
        // classes={{
        //   paper: classes.drawerPaper,
        // }}
      >
          <div className="drawerHeader">
          <img src={logo} alt="blackbuck logo"/>   
          <IconButton onClick={handleDrawerClose}>
            {direction}
          </IconButton>
        </div>
        <Divider />
        <div className="sidebar">
        <List disablePadding dense >
            
          {routes.map((sidebarItem, index) => (
            <SidebarItem
              key={`${sidebarItem.name}${index}`}
              depthStep={depthStep}
              depth={depth}
              expanded={expanded}
              {...sidebarItem}
            />
          ))}
        </List> 
        </div>
      
      </Drawer> 
    </div>  
    )
  }

// const SidebarItem=({ depthStep = 10, depth = 0, expanded, item, ...rest }) =>{
//     const [collapsed, setCollapsed] = React.useState(true);
//     const { label, items, Icon, onClick: onClickProp, url } = item;
  
//     function toggleCollapse() {
//       setCollapsed(prevValue => !prevValue);
//     }
  
//     function onClick(e) {
//       if (Array.isArray(items)) {
//         toggleCollapse();
//       }
//     //   if (onClickProp) {
//     //     onClickProp(e, item);
//     //   }
//     }
  
//     let expandIcon;
  
//     if (Array.isArray(items) && items.length) {
//       expandIcon = !collapsed ? (
//         <ExpandLessIcon
//           className={
//             "sidebar-item-expand-arrow" + " sidebar-item-expand-arrow-expanded"
//           }
//         />
//       ) : (
//         <ExpandMoreIcon className="sidebar-item-expand-arrow" />
//       );
//     }
  
//     return (
//       <>
//         <ListItem
//           className="sidebar-item"
//           onClick={onClick}
//           button
//           dense
//           {...rest}
//         >
//           <div
//             style={{ paddingLeft: depth * depthStep }}
//             className="sidebar-item-content"
//           >
//             {Icon && <Icon className="sidebar-item-icon" fontSize="small" />}
//             <div className="sidebar-item-text">{label}</div>
//             <Link to={ url } />

//           </div>
//           {expandIcon}
//         </ListItem>
//         <Collapse in={!collapsed} timeout="auto" unmountOnExit>
//           {Array.isArray(items) ? (
//             <List disablePadding dense>
//               {items.map((subItem, index) => (
//                 <React.Fragment key={`${subItem.name}${index}`}>
//                   {subItem === "divider" ? (
//                     <Divider style={{ margin: "6px 0" }} />
//                   ) : (
//                     <SidebarItem
//                       depth={depth + 1}
//                       depthStep={depthStep}
//                       item={subItem}
//                     />
//                   )}
//                 </React.Fragment>
//               ))}
//             </List>
//           ) : null}
//         </Collapse>
//       </>
//     );
//   }

// const Sidebar=({ items, depthStep, depth, expanded }) =>{
//     return (
//       <div className="sidebar">
//         <List disablePadding dense>
//           {items.map((sidebarItem, index) => (
//             <React.Fragment key={`${sidebarItem.name}${index}`}>
//               {sidebarItem === "divider" ? (
//                 <Divider style={{ margin: "6px 0" }} />
//               ) : (
//                 <SidebarItem
//                   depthStep={depthStep}
//                   depth={depth}
//                   expanded={expanded}
//                   item={sidebarItem}
//                 />
//               )}
//             </React.Fragment>
//           ))}
//         </List>
//       </div>
//     );
//   }


export default withRouter(Sidebar);

  