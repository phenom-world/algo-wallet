import React from 'react';
import { Avatar, Box, Button, Grid, Paper, List, Typography, Card, CardContent, CardHeader, CardMedia } from '@mui/material';

import AlgoImage from '../Images/algo.png'
import { useAccountContext } from '../context/account';


const Dashboard = () => {

    const { selectedAccount, signOutAccount } = useAccountContext();
    console.log(selectedAccount)

    return (
      <>
        <Box>
          <Grid container spacing={2}>
            <Grid item md={3} width="100%">
              <Paper
                sx={{
                  background: "rgba(0,0,0,0.9)",
                  color: "#fff",
                  marginBottom: "20px",
                }}
              >
                <List sx={{ p: 5, textAlign: "center" }}>
                  <Box>
                    <Avatar
                      src={AlgoImage}
                      sx={{ margin: "auto", width: "100px", height: "100px" }}
                    />
                    <Typography variant="h4" sx={{ m: 2 }}>
                      Welcome to Algoland.
                    </Typography>
                    <Typography component="p" sx={{ m: 2 }}>
                      You are Connected to the Algorand Network.
                    </Typography>
                  </Box>
                  <Box sx={{ marginTop: "10px", borderTop: "2px solid #fff" }}>
                    <Typography
                      component="p"
                      sx={{ m: 2, wordBreak: "break-all" }}
                    >
                      {selectedAccount["address"]}
                    </Typography>
                  </Box>
                  <Box sx={{ mt: 5 }}>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={signOutAccount}
                    >
                      Sign Out
                    </Button>
                  </Box>
                </List>
              </Paper>
            </Grid>
            <Grid item md={9}>
              <Box>
                <Card sx={{ my: 2, backgroundColor: "rgba(0,0,0,0.9)" }}>
                  <CardHeader title="" />
                  <CardContent>
                    <Typography variant="h4">Balance</Typography>
                    <Box>
                      <Typography variant="">
                        {parseFloat(
                          selectedAccount["amount"] / 1000000
                        ).toFixed(2)}{" "}
                        Algos
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
                <Box sx={{ backgroundColor: "rgba(0,0,0,0.9)", p: 5 }}>
                  <Box sx={{ my: 2, textAlign: "center" }}>
                    <Typography variant="h3">Assets</Typography>
                  </Box>
                  {selectedAccount["created-assets"].length > 0 ? (
                    <Grid container spacing={2}>
                      {selectedAccount["created-assets"].map((asset, index) => (
                        <Grid item md={4} sm={6} xs={12} key={index}>
                          <Card>
                            <CardMedia
                              component="img"
                              height="300"
                              image={asset["params"]["url"]}
                            />
                            <CardContent>
                              <Typography component="p">
                                <b>Name:</b> {asset["params"]["name"]}
                              </Typography>
                              <Typography component="p">
                                <b>Total:</b> {asset["params"]["total"]}
                              </Typography>
                              <Typography
                                component="p"
                                sx={{ wordBreak: "break-all", fontSize: "1em" }}
                              >
                                <b>Asset-Id:</b> {asset["index"]}
                              </Typography>
                              <Typography
                                component="p"
                                sx={{ wordBreak: "break-all", fontSize: "1em" }}
                              >
                                <b>Hash:</b> {asset["params"]["metadata-hash"]}
                              </Typography>
                            </CardContent>
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                  ) : (
                    <Box sx={{ textAlign: "center" }}>
                      <Typography variant="h6">No Asset Available</Typography>
                    </Box>
                  )}

                  {selectedAccount["mnemonic"] && (
                    <>
                      <Box sx={{ textAlign: "center", mt: 5 }}>
                        <Typography variant="h3">Your Mnemonic</Typography>
                        <Typography
                          component="p"
                          sx={{ wordBreak: "break-word", mt: 2 }}
                        >
                          {selectedAccount["mnemonic"]}
                        </Typography>
                      </Box>
                    </>
                  )}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </>
    );
};

export default Dashboard;
