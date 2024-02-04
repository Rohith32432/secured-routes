const express = require('express')
const { plead } = require('../models/lead')

async function viewleads(req, res) {
    const data = await plead.find()
    res.json(data)
}
async function addleads(req, res) {
    const data = await plead.create(req.body)
    res.json(data)
}
async function deleads(req, res) {
    const data = await plead.deleteOne(req.body)
    res.json(data)
}

async function populate(req, res) {
    const {id,userid}=req.body
    const lead=await plead.findOne({_id:id})
    if(lead) {
        lead.users.push(userid)
        lead.save()
        res.json('populated')
    }

    else
        res.json("inccort creds")
}
async function viewpopulated(req,res){
    const {id,userid}=req.body
const view=await plead.findOne({_id:id}).populate('users')
res.json(view)
}


module.exports = { viewleads, addleads, deleads,populate,viewpopulated }